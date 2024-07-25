<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProduitResource\Pages;
use App\Filament\Resources\ProduitResource\RelationManagers;
use App\Models\Produit;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProduitResource extends Resource
{
    protected static ?string $model = Produit::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('libelle')
                ->label('Libellé')
                ->required(),

                Forms\Components\TextInput::make('prix')
                ->label('Prix')
                ->numeric()
                ->required(),

            Forms\Components\FileUpload::make('image')
                ->label('Image')
                ->image()
                ->directory('produits/images'),

            Forms\Components\TextInput::make('lien_whatsapp')
                ->label('Lien WhatsApp')
                ->url()
                ->required(),

                Forms\Components\Select::make('categorie_id')
                ->label('Catégorie')
                ->relationship('categorie', 'libelle')
                ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('libelle')
                ->label('Libellé')
                ->sortable()
                ->searchable(),

                Tables\Columns\TextColumn::make('prix')
                ->label('Prix')
                ->sortable(),

                Tables\Columns\ImageColumn::make('image')
                    ->label('Image')
                    ->disk('public')
                    ->circular(),

                Tables\Columns\TextColumn::make('categorie.libelle')
                    ->label('Catégorie')
                    ->sortable()
                    ->searchable(),

                Tables\Columns\TextColumn::make('lien_whatsapp')
                ->label('Lien WhatsApp')
                ->url('')
                ->sortable(),
            ])

            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProduits::route('/'),
            'create' => Pages\CreateProduit::route('/create'),
            'edit' => Pages\EditProduit::route('/{record}/edit'),
        ];
    }
}
