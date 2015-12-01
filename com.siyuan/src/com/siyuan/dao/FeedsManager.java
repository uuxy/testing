package com.siyuan.dao;

import java.sql.Connection;
import java.util.ArrayList;

import com.siyuan.model.FeedObj;

public class FeedsManager {
	public ArrayList<FeedObj> GetFeeds() throws Exception {
		DbConnection database = new DbConnection();
		Connection conn = null;
		ArrayList<FeedObj> feeds = null;
		try {
			conn = database.getConnection();
			TableAccess tblAccess = new TableAccess();
			feeds = tblAccess.GetFeeds(conn);
			if (conn != null) {
				conn.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
			;
		} finally {
			if (conn != null) {
				conn.close();
			}
		}
		return feeds;
	}

}
