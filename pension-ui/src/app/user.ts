export class User
{
    username!: string;
    password!: string;
    name!: string;
    dob!: Date;
    aadhaar!: string;
    pan!: string;
    salary!: number;
    allowances!: number;
    pensionType: string = "self";
    bankType: string = "public";
}