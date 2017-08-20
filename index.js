/**
 * 精度计算
 * 
 * 
 */
;(function (global) {
    /**
     * 加法
     * @param {*} arg1 
     * @param {*} arg2 
     */
    function gpwAdd(arg1, arg2) {
        let r1, r2, m, c;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            const cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace('.', ''));
                arg2 = Number(arg2.toString().replace('.', '')) * cm;
            } else {
                arg1 = Number(arg1.toString().replace('.', '')) * cm;
                arg2 = Number(arg2.toString().replace('.', ''));
            }
        } else {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', ''));
        }
        return (arg1 + arg2) / m;
    }
    Number.prototype.gpwadd = function (arg) {
        return gpwAdd(this, arg);
    };
    /**
     * 减法
     * @param {*} arg1
     * @param {*} arg2
     */
    function gpwSub(arg1, arg2) {
        let r1, r2, m, n;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2)); // 动态控制精度长度
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
    Number.prototype.gpwsub = function (arg) {
        return gpwSub(this, arg);
    };

    /**
     * 乘法
     * @param {*} arg1
     * @param {*} arg2
     */
    function gpwMul(arg1, arg2) {
        let m = 0;
        const s1 = arg1.toString();
        const s2 = arg2.toString();
        try {
            m += s1.split('.')[1].length;
        } catch (e) {
        }
        try {
            m += s2.split('.')[1].length;
        } catch (e) {
        }
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
    }
    Number.prototype.gpwmul = function (arg) {
        return gpwMul(this, arg);
    };

    /**
     * 除法
     * @param {*} arg1
     * @param {*} arg2
     */
    function gpwDiv(arg1, arg2) {
        let t1 = 0, t2 = 0, r1, r2;
        try {
            t1 = arg1.toString().split('.')[1].length;
        } catch (e) {

        }
        try {
            t2 = arg2.toString().split('.')[1].length;
        } catch (e) {

        }
        r1 = Number(arg1.toString().replace('.', ''));
        r2 = Number(arg2.toString().replace('.', ''));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }

    Number.prototype.gpwdiv = function (arg) {
        return gpwDiv(this, arg);
    };
}
)(this);
