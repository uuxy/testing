package webservice;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.google.gson.Gson;
import com.siyuan.dao.FeedsManager;
import com.siyuan.model.FeedObj;

@Path("/feedservice")
public class FeedService {
	
	@GET
	@Path("/getfeeds")
	@Produces("application/json")
	public String feed()
	{
		String feeds  = null;
		try 
		{
			ArrayList<FeedObj> feedData = null;
			FeedsManager projectManager= new FeedsManager();
			feedData = projectManager.GetFeeds();
			//StringBuffer sb = new StringBuffer();
			Gson gson = new Gson();
			//java console
			System.out.println("Feeds received: " + gson.toJson(feedData));
			//for web output
			feeds = gson.toJson(feedData);

		} catch (Exception e)
		{
			e.printStackTrace();
			System.out.println("error, why?");
		}
		return feeds;
	}

}
