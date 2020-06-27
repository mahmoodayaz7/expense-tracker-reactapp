//We can bring our model here.
//import model
const Transaction = require("../models/Transaction");

// @desc 	Get All transactions
// @route 	GET /api/v1/transactions
// @access	Public

/*
!Old
exports.getTransactions = (req, res, next) => {
  res.send("Get Transactions");
};
*/

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find(); //module

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc 	add transactions
// @route 	POST /api/v1/transactions
// @access	Public

/*
!Old
exports.addTransactions = (req, res, next) => {
  res.send("POST Transactions");
};
*/

exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    //console.log(err);
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      //400 is client error code
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc 	delete transactions
// @route 	DELETE /api/v1/transactions
// @access	Public

/*
!Old
exports.deleteTransactions = (req, res, next) => {
  res.send("Delete Transactions");
};
*/

exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      //404 not found error
      return res.status(404).json({
        success: false,
        error: "No Transaction Found",
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
