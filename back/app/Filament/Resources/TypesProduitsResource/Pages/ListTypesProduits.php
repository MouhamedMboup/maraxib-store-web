<?php

namespace App\Filament\Resources\TypesProduitsResource\Pages;

use App\Filament\Resources\TypesProduitsResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListTypesProduits extends ListRecords
{
    protected static string $resource = TypesProduitsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
