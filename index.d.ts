/// <reference types="leaflet" />
import { PolylineOptions, LatLng, MarkerOptions, FeatureGroup } from 'leaflet';
declare namespace L {

    export type PolylineOptionsFn = (optionIdx: number) => PolylineOptions;

    export interface MultiOptions {
        optionIdxFn: (latLng: LatLng, prevLatLng: LatLng, index: number, allLatlngs: Array<LatLng>) => number;
        // options for the index returned by optionIdxFn. If supplied with a function then it will be called with the index
        options: PolylineOptions[] | PolylineOptionsFn;
        // the context to call optionIdxFn (optional)
        fnContext?: any;
        copyBaseOptions?: boolean;
    }

    export interface MultiOptionsPolylineOptions extends MarkerOptions {
        multiOptions: MultiOptions;
    }

    export interface MultiOptionsPolyline extends FeatureGroup {
        initialize(latlng: LatLng[], options?: MultiOptionsPolylineOptions): void;
        setLatLngs(latlngs: LatLng[]): MultiOptionsPolyline;
        getLatLngs(): LatLng[];
        getLatLngsSegments(): LatLng[];
    }

    export function multiOptionsPolyline(latlng: LatLng[], options?: MultiOptionsPolylineOptions): MultiOptionsPolyline;
}

declare module 'Leaflet.MultiOptionsPolyline';
