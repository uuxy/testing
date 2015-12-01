package com.siyuan.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import com.siyuan.model.FeedObj;

public class TableAccess {

	public ArrayList<FeedObj> GetFeeds(Connection connection) throws Exception {

		ArrayList<FeedObj> feedData = new ArrayList<FeedObj>();
		String URL = "SELECT title,description,url FROM website";

		PreparedStatement preparedStmt;
		try {
			// String uname = request.getParameter("uname");
			preparedStmt = connection.prepareStatement(URL);
			// ps.setString(1,uname);
			ResultSet rs = preparedStmt.executeQuery();
			while (rs.next()) {
				FeedObj feedObject = new FeedObj();
				feedObject.setTitle(rs.getString("title"));
				feedObject.setDescription(rs.getString("description"));
				feedObject.setUrl(rs.getString("url"));
				feedData.add(feedObject);
			}
			rs.close();
			preparedStmt.close();
			return feedData;
		} catch (Exception e) {
			throw e;
		}
	}

}
