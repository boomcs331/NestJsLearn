import { IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty()
  @MinLength(10, {
    message: "Name is too short"
  })
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;
}
