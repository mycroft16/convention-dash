import { HttpHeaders } from '@angular/common/http'

export interface ApiParameters {
    [key: string]: any;
}

export interface ApiBody {
    [key: string]: any;
}

export interface ApiResponse {
    [key: string]: any;
}

export interface ApiErrorResponse {
    status: number | string;
    json?: Function;
}

export type LoadingIndicatorOption = boolean | 'onBeforeRequest' | 'offAfterResponse';

export interface ApiOptions {
    headers?: HttpHeaders;
    params?: ApiParameters;
    body?: ApiBody
    loadingIndicator?: LoadingIndicatorOption;
    headerType?: string;
}