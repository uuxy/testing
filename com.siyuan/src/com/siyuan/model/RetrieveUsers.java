package com.siyuan.model;

import java.util.ArrayList;

public class RetrieveUsers {

	public String getAllUsersList(String username, String password) {
		// String userListData = null;
		try {
			ArrayList<UserObj> userList = null;
			SecurityManager securityManager = new SecurityManager();
			userList = securityManager.getAllUsersList();
			for (UserObj userVO : userList) {
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
	}
}
