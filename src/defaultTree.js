export const defaultTree = {
    children: [
        {id: 0,
            nodeName: "Node One",
            children: [{
                id: 1,
                nodeName: "Node Two",
                children: [
                    {
                        id: 2,
                        nodeName: "Node Three",
                        children: []
                    },
                    {
                        id: 3,
                        nodeName: "Node Four",
                        children: []
                    }]
            }
                ,
                {
                    id: 4,
                    nodeName: "Node Five",
                    children: [
                        {
                            id: 5,
                            nodeName: "Node Six",
                            children: [{
                                id: 6,
                                nodeName: "Node Seven",
                                children: []
                            }]
                        },
                        {
                            id: 7,
                            nodeName: "Node Eight",
                            children: []
                        }]
                }
            ]},
        {
            id: 8,
            nodeName: "Node Nine",
            children: []
        }
    ]
};