package com.sai.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class FamilyCallsignCompKey {

	@Id
	@Column(name = "from_user_id")
	private String fromUserId;

	@Id
	@Column(name = "to_user_id")
	private String toUserId;

}
