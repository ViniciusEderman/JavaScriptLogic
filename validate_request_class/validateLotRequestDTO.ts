import { ValidateNested, ArrayMinSize } from "class-validator";
import { Type } from "class-transformer";
import { MessageDTO } from "validateSingleRequestDTO.ts"

export class BatchMessageDTO {
  @ArrayMinSize(2, { message: "O lote deve conter pelo menos 2 objetos" })
  @ValidateNested({ each: true })
  @Type(() => MessageDTO)
  messages: MessageDTO[];
}
