export const getToken = (userId: string): string | null => {
   return localStorage.getItem(userId);
}

export const setToken = (token: string, userId: string) => {
    localStorage.setItem(userId, token);
}
