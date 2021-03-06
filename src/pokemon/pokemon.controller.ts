import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAll(): Pokemon[] {
    return this.pokemonService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') pokemonId: number): Pokemon {
    return this.pokemonService.getOne(pokemonId);
  }

  @Post()
  create(@Body() pokemonData: CreatePokemonDto) {
    return this.pokemonService.create(pokemonData);
  }

  @Delete(':id')
  delete(@Param('id') pokemonId: number) {
    return this.pokemonService.delete(pokemonId);
  }

  @Patch(':id')
  path(@Param('id') pokemonId: number, @Body() updateData: UpdatePokemonDto) {
    return this.pokemonService.update(pokemonId, updateData);
  }
}
