import { UserInfo } from './user-info'
export class JwtResponse {
    accessToken: string;
    type: string;
    username: string;
    authorities: string[];
    userInfo: UserInfo;
}