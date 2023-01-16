import { Categories } from '@app/entities/notification/category';
import { Content } from '@app/entities/notification/content';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class SendNotificationDto {
    @IsString()
    @IsNotEmpty()
    @Length(Content.MIN_LENGTH, Content.MAX_LENGTH)
    @ApiProperty({
        example: 'Notification Content',
        minLength: Content.MIN_LENGTH,
        maxLength: Content.MAX_LENGTH,
        type: String,
    })
    content: string;

    @IsNotEmpty()
    @IsEnum(Categories)
    @ApiProperty({
        example: 'Simple',
        enum: Categories,
        enumName: 'Categories',
        type: Categories,
    })
    category: Categories;

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({
        example: 'new-recipient-id',
        type: String,
    })
    recipientId: string;
}
