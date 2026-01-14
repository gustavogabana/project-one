import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
  * 1. @eslint/js: Fornece as regras fundamentais de qualidade do JavaScript (ex: detectar variáveis não utilizadas).
 * 2. globals: Biblioteca que define quais variáveis são globais (ex: 'window' no navegador ou 'process' no Node) para evitar erros de "variável não definida".
 * 3. eslint-plugin-react-hooks: Plugin oficial que valida se os Hooks do React (useState, useEffect) estão sendo usados corretamente.
 * 4. eslint-plugin-react-refresh: Regras específicas para o "Fast Refresh" do Vite, garantindo que os componentes atualizem no navegador sem perder o estado.
 * 5. typescript-eslint: A ferramenta principal que permite ao ESLint entender a sintaxe do TypeScript e aplicar regras específicas de tipagem.
 * 6. eslint/config: Utilitários da nova arquitetura do ESLint (Flat Config) usados para estruturar o arquivo e definir pastas a serem ignoradas.
 */

export default defineConfig([
  // Indica pastas que o ESLint deve ignorar completamente (não precisa fiscalizar o código pronto no 'dist')
  globalIgnores(['dist']),
  
  {
    // Define que as regras abaixo só se aplicam a arquivos com extensão .ts e .tsx (TypeScript)
    files: ['**/*.{ts,tsx}'],
    
    // "Herda" conjuntos de regras prontas para não precisar configurar uma por uma
    // Regras recomendadas de JS (ex: evitar variáveis não usadas)
    // Regras recomendadas de TypeScript (ex: tipagem correta)
    // Avisa se você usar hooks dentro de 'if' ou 'for'
    // Regras específicas para o funcionamento do refresh do Vite
    extends: [
      js.configs.recommended,           
      tseslint.configs.recommended,     
      reactHooks.configs.flat.recommended, 
      reactRefresh.configs.vite,
    ],
    
    // Configurações de ambiente
    // Permite o uso de recursos do JS lançados até 2020
    // Avisa que o código roda no navegador (libera o uso de 'window', 'fetch', etc.)
    languageOptions: {
      ecmaVersion: 2020,               
      globals: globals.browser,
    },
  },
])