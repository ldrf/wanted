package ar.com.wanted.wantedapi.issues.redmine.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RedmineIssuesDTO{
	  private List<Issues> issues; 
	  @JsonProperty(value = "total_count")
	  private int totalCount; 
	  private int offset; 
	  private int limit; 

	  public List<Issues> getIssues(){
	  	return issues; 
	  }
	  public void setIssues(List<Issues> input){
	  	 this.issues = input;
	  }
	  public int getTotalCount(){
	  	return totalCount; 
	  }
	  public void setTotalCount(int input){
	  	 this.totalCount = input;
	  }
	  public int getOffset(){
	  	return offset; 
	  }
	  public void setOffset(int input){
	  	 this.offset = input;
	  }
	  public int getLimit(){
	  	return limit; 
	  }
	  public void setLimit(int input){
	  	 this.limit = input;
	  }
	  
	
}
  
