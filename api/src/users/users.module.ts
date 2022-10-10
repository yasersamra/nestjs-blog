import {Module} from '@nestjs/common';
import {UsersService} from './service/users.service';
import {UsersController} from './controller/users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "./models/users.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {
}
