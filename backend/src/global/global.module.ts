import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from 'src/config/database.config';
import { jwtConfig } from 'src/config/jwt.config';
import { ConfigCommonService } from './services/config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync(jwtConfig),
    MongooseModule.forRootAsync(databaseConfig),
  ],
  providers: [ConfigService, ConfigCommonService],
  exports: [ConfigCommonService],
})
export class GlobalModule {}
