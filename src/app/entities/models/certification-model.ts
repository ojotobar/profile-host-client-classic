export interface CertificationResponseModel{
    id: string,
    userId: string,
    name: string,
    institution: string,
    dateObtained: Date,
    expires: Date | null,
    link: string | '',
    yearsOfValidity: number
}