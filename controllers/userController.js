import User from "../models/User.js";


export const createAdmin=async (req, res) => {

    try {
        const { name, email, password } = req.body;

        const user = new User({
            name,
            email,
            password,
            role: "Admin"
        })
        const savedUser = await user.save();
        res.json({
            savedUser
            
        })
    } catch (error) {
        res.json({
            error:"Error Occured"
        })
    }



};
export const createAlumni=async (req, res) => {

  try {
      const { name, email, password } = req.body;

      const user = new User({
          name,
          email,
          password,
          role: "Alumni"
      })
      const savedUser = await user.save();
      res.json({
          savedUser
          
      })
  } catch (error) {
      res.json({
          error:"Error Occured"
      })
  }



};
export const createStudent=async (req, res) => {

  try {
      const { name, email, password } = req.body;

      const user = new User({
          name,
          email,
          password,
          role: "Student"
      })
      const savedUser = await user.save();
      res.json({
          savedUser
          
      })
  } catch (error) {
      res.json({
          error:"Error Occured"
      })
  }



};
export const getAllUsers=async(req,res)=>{
  try{
     const getUsers=await User.find() 
     res.json({
      getUsers
     })
  }catch(error){
    res.json({
      error:"cannot fetch Data"
    })
    console.log("error")
  }
}
  


