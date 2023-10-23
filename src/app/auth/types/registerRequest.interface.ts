export interface RegisterRequestInterface {
    user: UserInterface
}

interface UserInterface {
    username: string
    password: string
    email: string
}
