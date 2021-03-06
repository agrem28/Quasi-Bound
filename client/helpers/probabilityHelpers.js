import Probability from 'probability-node';

const probabilityRP = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '97%',
    f: () => {
      typeStat = 'rp';
    },
  }, {
    p: '3%',
    f: () => {
      typeStat = 'rp total';
    },
  });
  prob();
  return typeStat;
};

const probabilityDec = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '34%',
    f: () => {
      typeStat = 'health';
    },
  }, {
    p: '33%',
    f: () => {
      typeStat = 'attack';
    },
  }, {
    p: '33%',
    f: () => {
      typeStat = 'armor';
    },
  });
  prob();
  return typeStat;
};

const probabilityAbAttack = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '90%',
    f: () => {
      typeStat = 'attack';
    },
  }, {
    p: '7%',
    f: () => {
      typeStat = 'attack adjacent';
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = 'attack health armor';
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = 'attack health armor adjacent';
    },
  });
  prob();
  return typeStat;
};

const probabilityAbHealth = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '90%',
    f: () => {
      typeStat = 'health';
    },
  }, {
    p: '7%',
    f: () => {
      typeStat = 'health adjacent';
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = 'health attack armor';
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = 'health attack armor adjacent';
    },
  });
  prob();
  return typeStat;
};

const probabilityAbArmor = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '90%',
    f: () => {
      typeStat = 'armor';
    },
  }, {
    p: '7%',
    f: () => {
      typeStat = 'armor adjacent';
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = 'attack health armor';
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = 'attack health armor adjacent';
    },
  });
  prob();
  return typeStat;
};

const probabilityApRP = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '90%',
    f: () => {
      typeStat = Math.floor(Math.random() * (3 - 1) + 1);
    },
  }, {
    p: '7%',
    f: () => {
      typeStat = Math.floor(Math.random() * (5 - 2) + 2);
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = Math.floor(Math.random() * (10 - 3) + 3);
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = Math.floor(Math.random() * (12 - 5) + 5);
    },
  });
  prob();
  return typeStat;
};

const probabilityParadise = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '33%',
    f: () => {
      typeStat = 'health';
    },
  }, {
    p: '33%',
    f: () => {
      typeStat = 'attack';
    },
  }, {
    p: '33%',
    f: () => {
      typeStat = 'armor';
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = 'health attack armor';
    },
  });
  prob();
  return typeStat;
};

const probabilityCharge = (hasCharge) => {
  let typeStatCharge = hasCharge;
  const prob = new Probability({
    p: '80%',
    f: () => {
      typeStatCharge = false;
    },
  }, {
    p: '20%',
    f: () => {
      typeStatCharge = true;
    },
  });
  prob();
  return typeStatCharge;
};

const probabilityTiny = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '87%',
    f: () => {
      typeStat = Math.floor(Math.random() * (10 - 1) + 1);
    },
  }, {
    p: '10%',
    f: () => {
      typeStat = Math.floor(Math.random() * (30 - 10) + 10);
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = Math.floor(Math.random() * (80 - 40) + 40);
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = Math.floor(Math.random() * (100 - 60) + 60);
    },
  });
  prob();
  return typeStat;
};

const probabilitySmall = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '74%',
    f: () => {
      typeStat = Math.floor(Math.random() * (20 - 10) + 10);
    },
  }, {
    p: '20%',
    f: () => {
      typeStat = Math.floor(Math.random() * (10 - 1) + 1);
    },
  }, {
    p: '5%',
    f: () => {
      typeStat = Math.floor(Math.random() * (80 - 40) + 40);
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = Math.floor(Math.random() * (100 - 60) + 60);
    },
  });
  prob();
  return typeStat;
};

const probabilityMedium = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '72%',
    f: () => {
      typeStat = Math.floor(Math.random() * (30 - 20) + 20);
    },
  }, {
    p: '20%',
    f: () => {
      typeStat = Math.floor(Math.random() * (20 - 10) + 10);
    },
  }, {
    p: '5%',
    f: () => {
      typeStat = Math.floor(Math.random() * (60 - 40) + 40);
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = Math.floor(Math.random() * (5 - 1) + 1);
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = Math.floor(Math.random() * (100 - 60) + 60);
    },
  });
  prob();
  return typeStat;
};

const probabilityLarge = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '72%',
    f: () => {
      typeStat = Math.floor(Math.random() * (50 - 30) + 30);
    },
  }, {
    p: '20%',
    f: () => {
      typeStat = Math.floor(Math.random() * (30 - 10) + 10);
    },
  }, {
    p: '5%',
    f: () => {
      typeStat = Math.floor(Math.random() * (70 - 50) + 50);
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = Math.floor(Math.random() * (5 - 1) + 1);
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = Math.floor(Math.random() * (100 - 60) + 60);
    },
  });
  prob();
  return typeStat;
};

const probabilityGiant = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '72%',
    f: () => {
      typeStat = Math.floor(Math.random() * (70 - 50) + 50);
    },
  }, {
    p: '20%',
    f: () => {
      typeStat = Math.floor(Math.random() * (60 - 20) + 20);
    },
  }, {
    p: '5%',
    f: () => {
      typeStat = Math.floor(Math.random() * (100 - 70) + 60);
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = Math.floor(Math.random() * (30 - 10) + 10);
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = Math.floor(Math.random() * (5 - 1) + 1);
    },
  });
  prob();
  return typeStat;
};

const probabilityTitan = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '72%',
    f: () => {
      typeStat = Math.floor(Math.random() * (100 - 70) + 60);
    },
  }, {
    p: '20%',
    f: () => {
      typeStat = Math.floor(Math.random() * (70 - 50) + 50);
    },
  }, {
    p: '5%',
    f: () => {
      typeStat = Math.floor(Math.random() * (60 - 20) + 20);
    },
  }, {
    p: '2%',
    f: () => {
      typeStat = Math.floor(Math.random() * (30 - 10) + 10);
    },
  }, {
    p: '1%',
    f: () => {
      typeStat = Math.floor(Math.random() * (5 - 1) + 1);
    },
  });
  prob();
  return typeStat;
};

const probabilityMagic = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '85%',
    f: () => {
      typeStat = Math.floor(Math.random() * (10 - 1) + 1);
    },
  }, {
    p: '12%',
    f: () => {
      typeStat = Math.floor(Math.random() * (20 - 5) + 5);
    },
  }, {
    p: '3%',
    f: () => {
      typeStat = Math.floor(Math.random() * (50 - 20) + 20);
    },
  });
  prob();
  return typeStat;
};

const probabilityProvoke = (stat) => {
  let typeStat = stat;
  const prob = new Probability({
    p: '60%',
    f: () => {
      typeStat = false;
    },
  }, {
    p: '27%',
    f: () => {
      typeStat = true;
    },
  }, {
    p: '8%',
    f: () => {
      typeStat = true;
    },
  }, {
    p: '4%',
    f: () => {
      typeStat = true;
    },
  },
  {
    p: '1%',
    f: () => {
      typeStat = true;
    },
  });
  prob();
  return typeStat;
};

const Prob = {
  probabilityCharge,
  probabilityGiant,
  probabilityLarge,
  probabilityMagic,
  probabilityMedium,
  probabilityParadise,
  probabilityProvoke,
  probabilitySmall,
  probabilityTiny,
  probabilityTitan,
  probabilityAbArmor,
  probabilityAbAttack,
  probabilityAbHealth,
  probabilityRP,
  probabilityApRP,
  probabilityDec,
};

export default Prob;
