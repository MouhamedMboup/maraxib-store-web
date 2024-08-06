<?php

namespace App\Filament\Resources\TypesProduitsResource\Pages;

use App\Filament\Resources\TypesProduitsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTypesProduits extends EditRecord
{
    protected static string $resource = TypesProduitsResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl("index");
    }
}
