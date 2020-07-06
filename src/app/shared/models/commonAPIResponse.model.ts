export interface CommonAPIResponse<T> {
    status: 'success' | 'fail';
    data: T;
}
