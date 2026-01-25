import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";

const professionalSchema = z.object({
    name: z.string().min(3, "Nome muito curto"),
    email: z.email("E-mail inválido"),
    proofOfLife: z
        .custom<FileList>()
        .refine((files) => files?.length === 1, "Video do corpo para avaliação é obrigatório")
        .refine((files) => files?.[0].size <= 10 * 1024 * 1024, "O video deve ter menos de 10MB")
});

type ProfessionalData = z.infer<typeof professionalSchema>;

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ProfessionalData>({
        resolver: zodResolver(professionalSchema)
    });

    const onSubmit = async (data: ProfessionalData) => {
        console.log("Data: ", data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 border-2">
                <div>

                    <input {...register("name")} placeholder="Nome Artístico"
                        className={`input input-bordered ${errors.name ? 'input-error' : ''}`} 
                    />
                    {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="label font-bold text-sm">Vídeo Prova de Vida</label>
                    <input type="file" accept="video/*" {...register("proofOfLife")}
                        className="file-input file-input-bordered file-input-primary"
                    />
                        {
                            errors.proofOfLife && <p className="text-error text-sm">
                                {errors.proofOfLife.message as string}
                            </p>
                        }
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Finalizar Cadastro"}
                </button>
            </form>
        </>
    );
}

export default Form;