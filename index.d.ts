declare namespace gpwopera {



    interface opera extends Number {
        /**
         * 加法
         * @param {*} arg1
         * @param {*} arg2
         */
        gpwAdd(arg1: number, arg2: number): number;
        /**
         * 减法
         * @param {*} arg1
         * @param {*} arg2
         */
        gpwSub(arg1: number, arg2: number): number;
        /**
         * 乘法
         * @param {*} arg1
         * @param {*} arg2
         */
        gpwMul(arg1: number, arg2: number): number;
        /**
         * 除法
         * @param {*} arg1
         * @param {*} arg2
         */
        gpwDiv(arg1: number, arg2: number): number;
    }


}

declare module "gpwopera" {
    var gpwoper: gpwopera.opera;
    export = gpwopera;
}

