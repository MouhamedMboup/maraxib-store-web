<?php

namespace App\Filament\Resources\TypesProduitsResource\Pages;

use App\Filament\Resources\TypesProduitsResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateTypesProduits extends CreateRecord
{
    protected static string $resource = TypesProduitsResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl("index");
    }
}
