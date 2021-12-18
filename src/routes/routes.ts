import {lazy, LazyExoticComponent} from "react";
import {NoLazy} from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
}


export const Routes: Route[] = [
    {
        path: '/lazyload',
        component: lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy Loading'
    }
];
/*

export const Routes: Route[] = [
    {
        path: '/lazy1',
        component: LazyPage1,
        name: 'LazyPage-1'
    }, {
        path: '/lazy2',
        component: LazyPage2,
        name: 'LazyPage-2'
    }, {
        path: '/lazy3',
        component: LazyPage3,
        name: 'LazyPage-3'
    },
];
*/
