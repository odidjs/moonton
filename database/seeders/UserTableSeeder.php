<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $admin = User::create(
            [
                'name' => 'admin',
                'email' => 'adminmoonton@gmail.com',
                'password' => bcrypt('password')
            ]
        );
        $admin->assignRole('admin');
    }
}
