import User from "../models/users";

exports.list = (req, res) => {
    // console.log(test);
    User.find().exec().then((result) => {
        return res.json(result)
    }).catch((err) => {
        return res.json({error: err})
    })
}

exports.get = (req, res) => {
    const id = req.params.id

    User.findById(id).exec().then((result) => {
        return res.json(result)
    }).catch((err) => {
        return res.json({error: err})
    })
}

exports.store = (req, res) => {
    const data = req.body

    let user = new User(data)
    user.save().then((result) => {
        return res.json(result)
    }).catch((err) => {
        return res.json({error: err})
    })

}

exports.update = (req, res) => {
    const id = req.params.id
    const data = req.body

    User.findByIdAndUpdate(id, data).exec().then((result) => {
        return res.json(result)
    }).catch((err) => {
        return res.json({error: err})
    })
}

exports.destroy = (req, res) => {
    const id = req.params.id

    User.findByIdAndRemove(id).exec().then((result) => {
        return res.json(result)
    }).catch((err) => {
        return res.json({error: err})
    })
}

exports.balanceIncrement = (req, res) => {
    const data = req.body

    console.log(data)

    User.findOne({n_passport: data.n_passport}).exec().then((result) => {
        return result
    }).then(res => {
        let totalBalance = parseInt(res.balance) + parseInt(data.balance)
        console.log(totalBalance)
        return User.update({_id: res._id}, {$set: {balance: totalBalance}}).exec()
            .then((res) => {
                return res.json(res)
            });
    }).catch((err) => {
        return res.json({error: err})
    })

}
