const results: ButtonsAggregation[] = await collection.aggregate([
    {
      $match: {
        $and: [
          {
            $or: [
              { 'data.type': 'quick_reply' },
              { 'data.type': 'postback' },
            ],
          },
          {
            date: {
              $gte: filters.period.custom.since,
              $lte: filters.period.custom.until,
            },
            'data.source': { $in: filters.channels },
            'data.text': { $nin: filters.ignoreMessages },
            psid: psidQuery,
          },
          {
            "$expr": {
              "$cond": [
                { "$eq": [pageIds, []] },
                {},
                { "$in": ["$pageId", pageIds] }
              ]
            }
          }
        ],
      },
    },
    {
      $group: {
        _id: { title: '$data.text', payload: '$data.payload', type: '$data.type' },
        total: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        total: -1,
      },
    },
  ]).limit(Number(filters.limit)).toArray();