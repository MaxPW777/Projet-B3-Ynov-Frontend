import { createFetcher } from "@/lib/utils";
import { RESTServerRoute } from "@/lib/routes/server";
import { LoginDto } from "@/lib/routes/auth/dto/login.dto";
import { RegisterDto } from "@/lib/routes/auth/dto/register.dto";
import { ConfirmAccountDto } from "@/lib/routes/auth/dto/confirm-account.dto";
import { RefreshTokenDto } from "@/lib/routes/auth/dto/refresh-token.dto";
import { RegisterResponse } from "@/lib/routes/auth/response/register.response";
import { LoginResponse } from "@/lib/routes/auth/response/login.response";
import { RefreshResponse } from "@/lib/routes/auth/response/refresh.response";

export class authRouter {
  public static login = createFetcher<LoginResponse, LoginDto>(RESTServerRoute.REST_LOGIN, "POST");
  public static register = createFetcher<RegisterResponse, RegisterDto>(RESTServerRoute.REST_SIGNUP, "POST");
  public static confirm = createFetcher<object, ConfirmAccountDto>(RESTServerRoute.REST_CONFIRM, "POST");
  public static refresh = createFetcher<RefreshResponse, RefreshTokenDto>(RESTServerRoute.REST_REFRESH, "POST");
}
