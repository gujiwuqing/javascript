const arr = [1,2,3,[1,2,3]]
console.log(arr.flat());
const arr1= [1,2,[3,4,[5,6]]]
console.log(arr1.flat(2));
let cityArr = [
    {
        province: "江西",
        checkAll: false,
        isShow:false,
        cities: [
            {
                id: "1",
                name: "南昌",
                label: "南昌",
                value: "南昌",
                checked: true

            },
            {
                id: "2",
                name: "赣州",
                label: "赣州",
                value: "赣州",
                checked: false
            },
        ],
    },
    {
        province: "湖北",
        checkAll: false,
        isShow:false,
        cities: [
            {
                id: "16",
                name: "武汉",
                label: "武汉",
                value: "武汉",
                checked: false
            },
            {
                id: "68",
                name: "石家庄",
                label: "石家庄",
                value: "石家庄",
                checked: true
            },
            {
                id: "69",
                name: "唐山",
                label: "唐山",
                value: "唐山",
                checked: false
            },
            {
                id: "70",
                name: "秦皇岛",
                label: "秦皇岛",
                value: "秦皇岛",
                checked: false
            },
            {
                id: "71",
                name: "邯郸",
                label: "邯郸",
                value: "邯郸",
                checked: false
            },
        ],
    },
    {
        province: "湖南",
        checkAll: false,
        isShow:false,
        cities: [
            {
                id: "16",
                name: "武汉",
                label: "武汉",
                value: "武汉",
                checked: false
            },
            {
                id: "68",
                name: "石家庄",
                label: "石家庄",
                value: "石家庄",
                checked: false
            },
            {
                id: "69",
                name: "唐山",
                label: "唐山",
                value: "唐山",
                checked: false
            },
            {
                id: "70",
                name: "秦皇岛",
                label: "秦皇岛",
                value: "秦皇岛",
                checked: false
            },
            {
                id: "71",
                name: "邯郸",
                label: "邯郸",
                value: "邯郸",
                checked: false
            },
        ],
    },
    {
        province: "河南",
        checkAll: false,
        isShow:false,
        cities: [
            {
                id: "16",
                name: "武汉",
                label: "武汉",
                value: "武汉",
                checked: true
            },
            {
                id: "68",
                name: "石家庄",
                label: "石家庄",
                value: "石家庄",
                checked: true
            },
            {
                id: "69",
                name: "唐山",
                label: "唐山",
                value: "唐山",
                checked: true
            },
            {
                id: "70",
                name: "秦皇岛",
                label: "秦皇岛",
                value: "秦皇岛",
                checked: false
            },
            {
                id: "71",
                name: "邯郸",
                label: "邯郸",
                value: "邯郸",
                checked: true
            },
        ],
    },
]
