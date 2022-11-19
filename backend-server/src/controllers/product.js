let Product = require("../models/Product");

exports.getProducts = async (req, res, next) => {
  try {
    let product = await Product.find().exec();
    if (product) {
      return res.status(200).json({
        product,
        msg:"Product Fetched Success"
      });
    }
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

exports.addProducts = async (req, res, next) => {
  let data = req.body;
  const products = new Product(data);
  try {
    const result = await products.save();
    if (result) {
      return res.status(201).json({
        msg: "Products added successfully",
      });
    }
  } catch (err) {
    return res.status(400).json({
      msg: msg,
    });
  }
};

exports.updateProducts = async (req, res, next) => {
  console.log("Update Product Susccessful");
};

exports.deleteProducts = async (req, res, next) => {
  console.log("Delete route success");
};

// exports.getBookings = async(req, res, next) => {
//     await Booking.find().exec(function(err, bookings) {
//         if (err) {
//             return res.status(400).json({
//                 err
//             })
//         }
//         if (bookings) {
//             return res.status(200).json({
//                 bookings
//             })
//         }
//     })
// };

// exports.addBooking = async(req, res, next) => {
//     console.log(req.body)
//     var isPaid;
//     if (req.body.isPaid == '') {
//         isPaid = false
//     } else {
//         isPaid = true
//     }
//     if (req.body.id != null && req.body.id != '') {
//         try {
//             var result = await Booking.findByIdAndUpdate(req.body.id, {
//                 bookerName: req.body.bookerName,
//                 startTime: req.body.startTime,
//                 endTime: req.body.endTime,
//                 contactNumber: req.body.contactNumber,
//                 duration: req.body.duration,
//                 price: req.body.price,
//                 isPaid: isPaid,
//                 compliment: req.body.compliment
//             }, {
//                 new: true,
//                 runValidators: true,
//                 upsert: true,
//                 setDefaultsOnInsert: true
//             })
//             if (result) {
//                 return res.status(200).json({
//                     msg: "Booking updated successfully"
//                 })
//             }
//         } catch (err) {
//             if (err.name == 'ValidationError') {

//                 const msg = (err.message.split(',')[0]).substring(26, 80)

//                 return res.status(400).json({
//                     msg: msg
//                 })
//             }
//             if (err.code === 11000) {
//                 var key = Object.keys(err.keyValue)[0]
//                 var value = err.keyValue[key]

//                 return res.status(400).json({
//                     msg: `Booking with ${key} '${value}' already exists`
//                 })
//             }

//         }
//     } else {
//         const booking = new Booking({
//             bookerName: req.body.bookerName,
//             startTime: req.body.startTime,
//             endTime: req.body.endTime,
//             contactNumber: req.body.contactNumber,
//             duration: req.body.duration,
//             price: req.body.price,
//             isPaid: req.body.isPaid,
//             compliment: req.body.compliment
//         })
//         try {
//             const result = await booking.save();
//             if (result) {
//                 return res.status(201).json({
//                     msg: "Booking added successfully"
//                 })
//             }
//         } catch (err) {
//             if (err.name == 'ValidationError') {
//                 console.log(err)

//                 const msg = (err.message.split(',')[0]).substring(39, 80)

//                 return res.status(400).json({
//                     msg: msg
//                 })
//             }
//             if (err.code === 11000) {
//                 var key = Object.keys(err.keyValue)[0]
//                 var value = err.keyValue[key]

//                 return res.status(400).json({
//                     msg: `Booking with ${key} '${value}' already exists`
//                 })
//             }

//         }
//     }
// };

// exports.deleteBooking = async(req, res, next) => {
//     await Booking.findByIdAndDelete(req.body.bookingId).exec(function(err, result) {
//         if (err) {
//             console.log(err)
//         }
//         if (result) {
//             return res.status(200).json({
//                 msg: 'Booking deleted successfully'
//             })
//         }
//     })
// };

// exports.addToMatch = async(req, res, next) => {
//     console.log(req.body);
//     try {
//         var result = await Booking.findByIdAndUpdate(req.body.id, {
//             'status': 'Played'
//         }, {
//             new: true,
//             runValidators: true,
//             upsert: true,
//             setDefaultsOnInsert: true
//         })
//         if (result) {
//             var teamName = result.bookerName;
//             var startTime = result.startTime;
//             var endTime = result.endTime;
//             var duration = result.duration;
//             var price = result.price;
//             var isPaid = result.isPaid
//             const match = await new Match({
//                 teamName,
//                 startTime,
//                 endTime,
//                 duration,
//                 price,
//                 isPaid

//             })
//             var result2 = match.save();
//             if (result2) {
//                 return res.status(200).json({
//                     msg: "Booking updated to match."
//                 })
//             }
//         }
//     } catch (err) {

//     }
// }

// exports.cancelBooking = async(req, res, next) => {
//     console.log(req.body);
//     try {
//         var result = await Booking.findByIdAndUpdate(req.body.id, {
//             'status': 'Cancelled'
//         }, {
//             new: true,
//             runValidators: true,
//             upsert: true,
//             setDefaultsOnInsert: true
//         })
//         if (result) {
//             return res.status(200).json({
//                 msg: "Booking cancelled."
//             })
//         }
//     } catch (err) {

//     }
// }
