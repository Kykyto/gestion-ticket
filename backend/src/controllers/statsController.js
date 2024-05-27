const Ticket = require('../models/ticket');

exports.getTicketsByProject = async (req, res) => {
  try {
    const ticketsByProject = await Ticket.aggregate([
      {
        $group: {
          _id: "$projet_id",
          count: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "projects",
          localField: "_id",
          foreignField: "_id",
          as: "project"
        }
      },
      {
        $unwind: "$project"
      },
      {
        $project: {
          _id: 0,
          project: "$project.nom",
          count: 1
        }
      }
    ]);

    res.json(ticketsByProject);
  } catch (error) {
    console.error('Error getting tickets by project:', error);
    res.status(500).json({ message: 'Error getting tickets by project' });
  }
};

exports.getTicketsByUser = async (req, res) => {
  try {
    const ticketsByUser = await Ticket.aggregate([
      {
        $group: {
          _id: "$rapporteur_id",
          count: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $unwind: "$user"
      },
      {
        $project: {
          _id: 0,
          user: "$user.nom",
          count: 1
        }
      }
    ]);

    res.json(ticketsByUser);
  } catch (error) {
    console.error('Error getting tickets by user:', error);
    res.status(500).json({ message: 'Error getting tickets by user' });
  }
};
