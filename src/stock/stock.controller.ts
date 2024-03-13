import { Stock } from './entities/stock.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createStockDto: CreateStockDto) {
    const { name, price, stock } = createStockDto;
    console.log(`${name},${price},${stock}`);

    return this.stockService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stockService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.stockService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Put('/:id')
  updatePut(@Param('id') id: number, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.stockService.remove(+id);
  }
}
