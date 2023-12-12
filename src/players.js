const arrPlayers = [
    {
      id: 1,
      firstName: 'Lionel',
      lastName: 'Messi',
      age: 34,
      club: 'Paris Saint-Germain',
      trophies: 34,
      nationality: 'Argentine',
      bio: 'Lionel Messi was born on June 24, 1987, in Rosario, Argentina. He joined FC Barcelona\'s youth academy, La Masia, at a young age and quickly rose through the ranks due to his extraordinary talent and exceptional dribbling skills. Making his first-team debut at the age of 17, Messi became a key figure for Barcelona, displaying unmatched prowess on the ball, vision, and goal-scoring ability. His career at Barcelona spanned over 20 years, during which he won numerous domestic and international titles, including multiple UEFA Champions League trophies and numerous La Liga titles. Messi\'s ability to dribble past opponents with ease, his precise finishing, and his remarkable consistency earned him multiple Ballon d\'Or awards as the world\'s best player. In August 2021, Messi left Barcelona due to financial constraints and subsequently joined Paris Saint-Germain (PSG), continuing to display his football brilliance. His journey in football is characterized by records shattered, goals scored, and an impact that transcends the sport. Messi\'s dedication, humility, and love for the game have cemented his legacy as an icon in football history.',
      img: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg'
    },
    {
        id: 2,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        age: 37,
        club: 'Manchester United',
        trophies: 33,
        nationality: 'Portuguese',
        bio: 'Born on February 5, 1985, in Funchal, Madeira, Portugal, Cristiano Ronaldo began his professional career with Sporting CP in Portugal. His exceptional talent quickly attracted attention, leading to a move to Manchester United in 2003. During his time at Manchester United, Ronaldo established himself as a key player, winning numerous titles including three Premier League titles and the UEFA Champions League. His remarkable skill set, incredible speed, and goal-scoring ability made him a global football sensation. In 2009, Ronaldo moved to Real Madrid for a then-world record transfer fee. His time at Real Madrid was illustrious, winning multiple La Liga titles and four Champions League trophies. He also claimed numerous individual accolades, including multiple Ballon d\'Or awards. After leaving Real Madrid, Ronaldo joined Juventus in 2018, where he continued to showcase his exceptional talent, helping the club win Serie A titles.In 2021, Cristiano Ronaldo made a highly anticipated return to Manchester United, rejoining the club where he initially rose to stardom. His dedication, athleticism, and consistent performance throughout his career have solidified his status as an icon in the world of football.',
        img: 'https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png'
      },
      {
        id: 3,
        firstName: 'Neymar',
        lastName: 'Jr.',
        age: 29,
        club: 'Paris Saint-Germain',
        trophies: 19,
        nationality: 'Brazilian',
        bio: 'Neymar Jr., a highly skilled and prolific forward, has had an impressive career in football. Born on February 5, 1992, in Mogi das Cruzes, Brazil, Neymar began his professional career at Santos FC, where his exceptional talent quickly gained attention. His remarkable dribbling ability, speed, and flair on the field earned him comparisons to legendary Brazilian players. In 2013, Neymar made a high-profile move to FC Barcelona, where he formed a formidable attacking trio with Lionel Messi and Luis Suarez, winning numerous titles including the UEFA Champions League. His contributions on the field and his creative style of play garnered widespread admiration. In 2017, Neymar transferred to Paris Saint-Germain (PSG) in a record-breaking deal, becoming one of the most expensive players in history. At PSG, he continued to showcase his incredible skills, leading the team to domestic success. Neymar is known for his speed, agility, technical ability, and knack for scoring extraordinary goals. His impact on the field, coupled with his charismatic personality, has made him a global football icon.',
        img: 'https://sportsmatik.com/uploads/world-events/players/nymer_1564473570.jpg'
      },
      {
        id: 4,
        firstName: 'Kylian',
        lastName: 'Mbappé',
        age: 23,
        club: 'Paris Saint-Germain',
        trophies: 12,
        nationality: 'French',
        bio: 'Kylian Mbappe, born on December 20, 1998, in Bondy, France, emerged as one of football\'s brightest talents. He began his professional career at AS Monaco, where his exceptional speed, skill, and goal-scoring ability quickly made him a sought-after prospect. In 2017, Mbappe transferred to Paris Saint-Germain (PSG), initially on loan and then in a record-breaking permanent deal. His performances on the field, combining lightning pace with clinical finishing, established him as one of the most promising players in the world. Mbappe\'s accomplishments include multiple Ligue 1 titles with PSG and impressive displays in UEFA Champions League competitions. His agility, technical prowess, and maturity on the pitch have drawn comparisons to some of football\'s greatest players. At a young age, Mbappe became a World Cup winner with the French national team in 2018, showcasing his talent and contributing significantly to France\'s victory. His remarkable achievements at such a young age have solidified his position as a rising star in the world of football.',
        img: 'https://b.fssta.com/uploads/application/soccer/headshots/40670.vresize.350.350.medium.91.png'
      },
      {
        id: 5,
        firstName: 'Robert',
        lastName: 'Lewandowski',
        age: 33,
        club: 'Bayern Munich',
        trophies: 25,
        nationality: 'Polish',
        bio: 'Robert Lewandowski, born on August 21, 1988, in Warsaw, Poland, is widely regarded as one of the most prolific strikers in modern football. He began his professional career in Poland before moving to Borussia Dortmund in 2010, where he gained recognition for his goal-scoring prowess. During his time at Borussia Dortmund, Lewandowski emerged as a top striker, winning multiple Bundesliga titles and gaining attention for his incredible skill in front of goal. His performances attracted interest from top clubs across Europe. In 2014, Lewandowski made a high-profile transfer to Bayern Munich, where he continued to showcase his goal-scoring abilities. He established himself as one of the world\'s best strikers, consistently leading the goal-scoring charts in various competitions. Lewandowski\'s accomplishments include numerous Bundesliga titles, domestic cups, and individual accolades. In the 2019-2020 season, he had a standout year, winning the UEFA Champions League with Bayern Munich and being awarded The Best FIFA Men\'s Player award. Known for his exceptional technique, positioning, and finishing ability, Lewandowski\'s impact on the field has cemented his legacy as one of the greatest forwards in the history of football.',
        img: 'https://www.fcbarcelona.com/photo-resources/2023/10/04/22dd0d30-d58f-448c-a51e-47d44c894d16/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790'
      },
      {
        id: 6,
        firstName: 'Kevin',
        lastName: 'De Bruyne',
        age: 30,
        club: 'Manchester City',
        trophies: 13,
        nationality: 'Belgian',
        bio: 'Kevin De Bruyne, born on June 28, 1991, in Drongen, Belgium, is considered one of the premier midfielders in world football. He began his professional career at Genk in Belgium, showcasing his talent as a highly skilled and versatile midfielder. De Bruyne\'s breakthrough came during his time at VfL Wolfsburg in Germany, where he displayed his remarkable playmaking skills. His performances earned him recognition and paved the way for a move to Manchester City in 2015. At Manchester City, De Bruyne\'s influence grew exponentially. His exceptional passing, precise crosses, and ability to dictate the game from midfield have been instrumental in the team\'s success. He has played a pivotal role in winning multiple Premier League titles, domestic cups, and other honors with the club. De Bruyne\'s incredible vision, technical ability, and football intelligence make him a standout player. His knack for creating goal-scoring opportunities and delivering decisive passes has established him as one of the most influential midfielders in the modern game. Internationally, he has been a key figure for the Belgian national team, contributing significantly in major tournaments such as the FIFA World Cup and UEFA European Championship, showcasing his immense talent on the global stage.',
        img: 'https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png'
      },
      {
        id: 7,
        firstName: 'Virgil',
        lastName: 'van Dijk',
        age: 30,
        club: 'Liverpool',
        trophies: 10,
        nationality: 'Dutch',
        bio: 'Virgil van Dijk, born on July 8, 1991, in Breda, Netherlands, is celebrated for his defensive prowess and leadership on the field. He began his professional career in the Netherlands, showcasing his defensive abilities at Groningen and subsequently at Celtic in Scotland. Van Dijk\'s impressive performances at Celtic drew attention from top clubs, leading to his move to the English Premier League side Southampton in 2015. His exceptional defensive skills, aerial prowess, and composure on the ball quickly made him a standout defender in the league. In 2018, van Dijk made a significant transfer to Liverpool FC, becoming the world\'s most expensive defender at the time. His impact at Liverpool was immediate and profound. He played a pivotal role in Liverpool\'s defensive solidity, helping the team win the UEFA Champions League in 2019 and the Premier League title in 2020, ending the club\'s 30-year league title drought. Known for his physicality, ability to read the game, and calmness under pressure, van Dijk is revered for his defensive contributions and his ability to organize the backline. His leadership qualities and influence on the pitch have been integral to Liverpool\'s success. Unfortunately, van Dijk suffered a serious knee injury during the 2020-2021 season, sidelining him for a significant period. However, his impact on Liverpool and his reputation as one of the finest defenders in the world remain unquestionable.',
        img: 'https://www.footballdatabase.eu/images/photos/players/2019-2020/a_137/137796.jpg'
      },
      {
        id: 8,
        firstName: 'Mohamed',
        lastName: 'Salah',
        age: 29,
        club: 'Liverpool',
        trophies: 10,
        nationality: 'Egyptian',
        bio: 'Born on June 15, 1992, in Nagrig, Egypt, Mohamed Salah emerged as one of the most dynamic forwards in modern football. He began his professional career in Egypt before moving to Europe to further his footballing journey. Salah gained attention during his time at FC Basel in Switzerland, where he showcased his exceptional dribbling skills and goal-scoring ability. His performances at Basel led to a move to Chelsea FC in the English Premier League in 2014. While Salah initially faced challenges at Chelsea, he flourished during loan spells at other clubs. His breakthrough came at AS Roma in Italy, where he had a remarkable season, demonstrating his pace and scoring prowess. In 2017, Salah returned to the Premier League, joining Liverpool FC. His impact was immediate and extraordinary. Salah\'s incredible speed, precise finishing, and remarkable goal-scoring record quickly made him a fan favorite and earned him numerous individual accolades. He played a pivotal role in Liverpool\'s success, contributing significantly to their victories in the UEFA Champions League and the Premier League. Salah\'s ability to score consistently, break records, and perform at the highest level has solidified his status as one of the top forwards in the world. Internationally, Salah is a key player for the Egyptian national team, showcasing his talent and leadership on the global stage.',
        img: 'https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2023-07/pp-23-24-mens-home-body-salah.webp?itok=usRCmKmb'
      },
      {
        id: 9,
        firstName: 'Sadio',
        lastName: 'Mané',
        age: 29,
        club: 'Liverpool',
        trophies: 10,
        nationality: 'Senegalese',
        bio: 'Sadio Mané, born on April 10, 1992, in Sedhiou, Senegal, is celebrated for his remarkable talent and contributions to football. He began his professional career in Europe, joining FC Metz in France before moving to Red Bull Salzburg in Austria, where he gained attention for his impressive performances. Mané\'s breakthrough came at Southampton FC in the English Premier League. His incredible speed, technical ability, and knack for scoring goals quickly made him a standout player. His contributions to Southampton earned him a move to Liverpool FC in 2016. At Liverpool, Mané became an integral part of the team known as the \'Red Arrows\' alongside Mohamed Salah and Roberto Firmino. His electrifying pace, intelligent movement, and scoring ability were instrumental in Liverpool\'s success. He played a key role in the team\'s victories in the UEFA Champions League and the Premier League. Mané\'s style of play, characterized by his agility, trickery on the ball, and clinical finishing, has made him a fan favorite. His consistency in front of goal and his contributions to Liverpool\'s attacking prowess have solidified his reputation as one of the top wingers in world football. Internationally, Mané is a key player for the Senegalese national team, showcasing his talent and leadership in major tournaments, including the FIFA World Cup and the Africa Cup of Nations.',
        img: 'https://img.fcbayern.com/image/upload/t_cms-portrait/f_auto/w_660,c_fill/q_auto/v1656496625/cms/public/images/fcbayern-com/players/spielerportraits/ganzkoerper/sadio_mane.png'
      },
    {
      id: 10,
      firstName: 'Karim',
      lastName: 'Benzema',
      age: 34,
      club: 'Real Madrid',
      trophies: 20,
      nationality: 'French',
      bio: 'Born on December 19, 1987, in Lyon, France, Karim Benzema is regarded as one of the top strikers in world football. He began his professional career at Lyon, where he emerged as a promising talent known for his goal-scoring prowess and technical abilities. Benzema\'s exceptional performances at Lyon attracted the attention of top European clubs, leading to his transfer to Real Madrid in 2009. At Real Madrid, Benzema became an integral part of the team\'s attacking force, showcasing his ability to score goals, create opportunities for teammates, and contribute to the team\'s success. His partnership with Cristiano Ronaldo and other teammates at Real Madrid was instrumental in the club\'s victories in La Liga and the UEFA Champions League. Benzema\'s intelligent positioning, clinical finishing, and link-up play earned him recognition as one of the most complete forwards in the game. Despite occasional controversies and challenges, Benzema\'s talent has been widely acknowledged. His ability to adapt to different styles of play and his consistency in delivering impactful performances have made him a key figure at Real Madrid for several seasons. Internationally, Benzema has represented the French national team, showcasing his skills in major tournaments such as the FIFA World Cup and the UEFA European Championship.',
      img: 'https://i.pinimg.com/564x/28/d4/50/28d4501388a1a14056be5e5db40384ee.jpg'
    }
  ];
  
  export default arrPlayers;
  