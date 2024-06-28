import { ComponentMobileStyleEntity } from '@libs/entity';
import { Field, InputType, PickType } from '@nestjs/graphql';
import { BackgroundType } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class ComponentMobileStyleInput extends PickType(
  ComponentMobileStyleEntity,
  ['height', 'padding', 'gap', 'background', 'backgroundType'],
) {
  @Field({ description: '높이', nullable: true })
  @IsString({ message: '올바른 형식의 높이를 입력해주세요.' })
  @IsOptional()
  height: string | null;

  @Field({ description: '패딩', nullable: true })
  @IsString({ message: '올바른 형식의 패딩을 입력해주세요.' })
  @IsOptional()
  padding: string | null;

  @Field({ description: '갭', nullable: true })
  @IsString({ message: '올바른 형식의 갭을 입력해주세요.' })
  @IsOptional()
  gap: string | null;

  @Field({ description: '배경', nullable: true })
  @IsString({ message: '올바른 형식의 배경을 입력해주세요.' })
  @IsOptional()
  background: string | null;

  @Field(() => BackgroundType, { description: '배경 종류', nullable: true })
  @IsEnum(BackgroundType, {
    message: '올바른 형식의 배경 종류를 입력해주세요.',
  })
  @IsOptional()
  backgroundType: BackgroundType | null;
}
