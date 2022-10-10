import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from '../service/users.service';
import {Users} from '../models/users.interface';
import {Observable} from 'rxjs';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Post()
    create(@Body() user: Users): Observable<Users> {
        return this.userService.create(user);
    }

    @Get(':id')
    findOne(@Param() params): Observable<Users> {
        return this.userService.findOne(params.id);
    }

    @Get()
    findAll(): Observable<Users[]> {
        return this.userService.findAll();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
        return this.userService.deleteOne(Number(id));
    }

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: Users): Observable<any> {
        return this.userService.updateOne(Number(id), user);
    }

}
