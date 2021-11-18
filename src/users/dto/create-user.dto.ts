import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'Email'})
    @IsString({message: 'Must be a string...'})
    @IsEmail({}, {message: "Incorrect email"})
    readonly email: string
    
    @ApiProperty({example: 'yourPassword', description: 'Password'})
    @IsString({message: 'Must be a string...'})
    @Length(8, 35, {message: 'Not less than 8 and not more than 35'})
    readonly password: string
}