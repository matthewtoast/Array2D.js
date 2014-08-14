# Array2D.js benchmark results

Unless otherwise specified, operations are on the standard example 3x3 grid:

    [[1,2,3],
     [4,5,6],
     [7,8,9]]

- - - -

    #transpose x 3,348,818 ops/sec ±0.28% (102 runs sampled) (ran at Wed Aug 13 2014 18:25:09 GMT-0700 (PDT))
    #map x 3,147,191 ops/sec ±0.39% (97 runs sampled) (ran at Wed Aug 13 2014 18:25:15 GMT-0700 (PDT))
    #glue x 148,641 ops/sec ±0.32% (99 runs sampled) (ran at Wed Aug 13 2014 18:25:20 GMT-0700 (PDT))

- - - -

    #transpose x 3,317,657 ops/sec ±0.30% (103 runs sampled) (ran at Tue Aug 12 2014 21:03:06 GMT-0700 (PDT))
    #map x 3,159,978 ops/sec ±0.15% (102 runs sampled) (ran at Tue Aug 12 2014 21:03:11 GMT-0700 (PDT))

- - - -

    #transpose x 3,192,718 ops/sec ±0.89% (97 runs sampled) (ran at Tue Aug 12 2014 20:37:58 GMT-0700 (PDT))

- - - -

    #transpose x 722,616 ops/sec ±0.29% (101 runs sampled) (ran at Sun Aug 10 2014 14:36:13 GMT-0700 (PDT))
