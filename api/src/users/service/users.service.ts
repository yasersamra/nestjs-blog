import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "../models/users.entity";
import {Repository} from "typeorm";
import {Users} from "../models/users.interface";
import {from, Observable} from "rxjs";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) {
    }

    create(user: Users): Observable<Users> {
        return from(this.userRepository.save(user));
    }

    findOne(id: number): Observable<Users> {
        return from(this.userRepository.findOne({
            where:
                {id}
        }));
    }

    findAll(): Observable<Users[]> {
        return from(this.userRepository.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.userRepository.delete(id));
    }

    updateOne(id: number, user: Users): Observable<any> {
        return from(this.userRepository.update(id, user));
    }
}
