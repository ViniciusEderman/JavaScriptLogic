import { IsUrl, IsOptional, IsNotEmpty, IsString, IsNumberString, Length } from "class-validator";

export class MessageDTO {
  @IsNotEmpty()
  @IsNumberString()
  @Length(2, 3, { message: "" })
  ddi: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(8, 15, { message: "" })
  phone: string;

  @IsNotEmpty()
  @IsString({ message: "" })
  message: string;

  @IsNotEmpty()
  @IsNumberString()
  account: Number;

  @IsOptional()
  @IsUrl()
  notifyUrl: string;

  @IsOptional()
  retryId: string;
}