    if(getYaw() < 0){
			var hit = getYaw()+90;
			for(go=0; hit<0; go++)
			{
				hit+= 360;
			}
			x = Math.cos(hit*(Math.PI/180));
			z = Math.sin(hit*(Math.PI/180));
			setVelX(v, x*2);
			setVelY(v, 1);
			setVelZ(v, z*2);
		}
		else if(getYaw() > 0 && getYaw() < 360)
		{
			var hit = getYaw()+90;
			XVel = Math.cos(hit*(Math.PI/180));
			ZVel= Math.sin(hit*(Math.PI/180));
			setVelX(v, XVel*2);
			setVelY(v, 1);
			setVelZ(v, ZVel*2);
		}
		else if( getYaw() >= 360)
		{
			var hit= getYaw()+90;
			for(go=0; hit>=360; go++)
			{
				hit -= 360;
			}
			XVel = Math.cos(hit*(Math.PI/180));
			ZVel = Math.sin(hit*(Math.PI/180));
			setVelX(v, XVel*2);
			setVelY(v, 1);
			setVelZ(v, ZVel*2);
         
    }
