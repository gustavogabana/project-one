import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";

const professionalSchema = z.object({
    name: z.string().min(3, "Nome muito curto"),
    proofOfLife: z
        .custom<FileList>()
        .refine((files) => files instanceof FileList && files.length > 0, "Video para avaliação é obrigatório")
        .refine((files) => !files[0] || files[0].size <= 200 * 1024 * 1024, "O video deve ter menos de 200MB")
});

type ProfessionalData = z.infer<typeof professionalSchema>;

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ProfessionalData>({
        resolver: zodResolver(professionalSchema),
        defaultValues: {
            name: "",
            proofOfLife: undefined
        }
    });

    const onSubmit = async (data: ProfessionalData) => {
        console.log("Data: ", data);
    }

    return (
        <div className="min-h-screen bg-gray-100 grid place-items-center p-4">
            
            <form onSubmit={handleSubmit(onSubmit)} 
                className="w-full max-w-md flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">Cadastro Profissional</h2>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Nome Artístico</label>
                    <input 
                        {...register("name")} 
                        placeholder="Ex: Ana Silva"
                        className={`border-2 rounded-lg p-2 outline-none transition-all
                            ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`} 
                    />
                    {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Vídeo Prova de Vida</label>
                    <input 
                        type="file" 
                        accept="video/*" 
                        {...register("proofOfLife")}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer border-2 border-dashed border-gray-300 p-2 rounded-lg"
                    />
                    {errors.proofOfLife && (
                        <p className="text-red-500 text-xs font-medium">
                            {String(errors.proofOfLife.message)}
                        </p>
                    )}
                </div>

                <button type="submit" 
                    disabled={isSubmitting}
                    className={`mt-2 w-full py-3 rounded-lg font-bold text-white transition-all
                        ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}`}
                >
                    {isSubmitting ? "Enviando Vídeo..." : "Finalizar Cadastro"}
                </button>

                <p className="text-[10px] text-gray-400 text-center italic">
                    Ao finalizar, você concorda com nossos termos de curadoria.
                </p>
            </form>
        </div>
    );
};

export default Form;