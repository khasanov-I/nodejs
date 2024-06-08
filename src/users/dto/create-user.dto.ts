import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'aaa@aaa.a', description: 'Почта'})
    readonly email: string;

    @ApiProperty({example: '12345', description: 'Пароль'})
    readonly password: string;
}