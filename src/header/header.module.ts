import { Module } from '@nestjs/common';
import { HeaderService } from './header.service';
import { HeaderResolver } from './header.resolver';

@Module({
  providers: [HeaderResolver, HeaderService],
  exports: [HeaderService],
})
export class HeaderModule {}
