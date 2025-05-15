import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

export const CurrentUser = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return data ? user?.[data as keyof typeof User] : (user as User);
  },
);
