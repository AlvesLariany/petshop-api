export const validateCNPJ = (cnpj: string): boolean => {
    return /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(cnpj);
  };
  