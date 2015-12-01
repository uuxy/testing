package webservice;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import com.siyuan.model.RetrieveUsers;


@Path("/loginservice")
public class LoginService {

	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public String login(@FormParam("username") String username,
			@FormParam("password") String password) {
		
		RetrieveUsers users = new RetrieveUsers();
		String loginStatus = users.getAllUsersList(username, password);
		return loginStatus;

		//return getAllUsersList(username, password);

	}

/*	public String getAllUsersList(String username, String password) {
		//String userListData = null;
		try {
			ArrayList<UserObjects> userList = null;
			SecurityManager securityManager = new SecurityManager();
			userList = securityManager.getAllUsersList();
			for (UserObjects userVO : userList) {
				if (userVO.getUsername().equals(username)) {
					if (userVO.getPassword().equals(password)) {
						return "<font color='#0000FF'></br><h2>Welcome back - You are logged in with user name: "
								+ "<em>" + username + "</em>!</h2</font>";
					}
				}
			}

		} catch (Exception e) {
			System.out.println("error");
		}
		return "You username and/or password was not right. </br>Please try again.";
	}*/
}